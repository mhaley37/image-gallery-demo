import { Button, Card } from 'react-bootstrap';

type ImageCardProps = {
  identifier: number;
  image: { [k: string]: any };
  handleDelete: any;
};

export const ImageCard = ({ image, handleDelete }: ImageCardProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={image.urls.small}
        alt={image.alt_description}
      />
      <Card.Body>
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>{image.description ?? image.alt_description}</Card.Text>
        <Button
          variant="primary"
          type="submit"
          onClick={() => handleDelete(image.id)}
        >
          Delete!
        </Button>
      </Card.Body>
    </Card>
  );
};
