import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from './components/Header';
import { ImageCard } from './components/ImageCard';
import { Search } from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState<{ [k: string]: any }[]>([]);

  const handleSearchSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
      );
      if (!res.ok) {
        throw new Error(`Request to unsplash failed!  Received ${res.status}`);
      }
      const data = (await res.json()) as Record<any, any>;
      setImages([{ title: word, ...data }, ...images]);
    } catch (e) {
      console.log(`Error: ${e}`);
    } finally {
      setWord('');
    }
  };

  const handleImageDelete = (id: string) => {
    console.log(images);
    images.length && setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {!!images.length && (
        <Container className="mt-4">
          <Row xs={1} md={2} lg={3}>
            {images.map((img, i) => (
              <Col className="pb-3" key={i}>
                <ImageCard
                  identifier={i}
                  image={img}
                  handleDelete={handleImageDelete}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
