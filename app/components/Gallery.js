'use client'
import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export function ImageCard({ imageUrl, onClick }) {
  return (
    <Card className="bg-dark text-white mb-5 shadow-lg transform transition duration-500 hover:scale-105" style={{ width: '500px', height: '300px' }} onClick={onClick}>
      <Image
        src={imageUrl}
        alt="Gallery item"
        layout="fill"
        objectFit="cover"
        className="card-img-top"
      />
    </Card>
  );
}

export function Gallery() {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image8.jpg',
    '/image9.jpg'
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullscreen = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <Container fluid className="bg-black text-white py-5 px-5" id='gallery'>
      <h1 className="text-center display-5 font-weight-bold mb-14   ">Gallery</h1>
      <Row className="justify-content-center mt-4">
        {images.map((image, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center ">
            <ImageCard imageUrl={image} onClick={() => openFullscreen(image)} />
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={closeFullscreen} centered size="lg" > {/* Adjusted modal size to extra large */}
        <Modal.Body className="text-center">
          {selectedImage && <Image src={selectedImage} alt="Fullscreen Image" width={800} height={50} className='rounded-lg' />} {/* Adjusted image dimensions */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeFullscreen}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
