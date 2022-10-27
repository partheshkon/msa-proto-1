import { graphql } from 'gatsby';
import { Accordion, Card } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEffect, useState } from 'react';
import ExampleCarousel from '@/components/ExampleCarousel';

export const accordianItemsQuery = graphql`
  query MyQuery {
    allContentfulNews {
      nodes {
        descriptionNews {
          raw
        }
        newsHeading {
          raw
        }
      }
    }

    allContentfulHeroImage {
      nodes {
        heroImage {
          url
        }
      }
    }

    contentfulExampleCarousel {
      carouselBodies {
        carouselTitle
        carouselDescription
        imageUrl {
          url
        }
      }
    }
  }
`;

interface IProp {
  data: any;
}

export default function Home({ data }: IProp) {
  console.log(data);
  const [heroImageState, setHeroImageState] = useState(``);
  useEffect(() => {
    setHeroImageState(data.allContentfulHeroImage.nodes[0].heroImage.url);
  }, [data.allContentfulHeroImage]);

  const myStyle = {
    backgroundImage: `url('${heroImageState}')`,
    height: `100vh`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`
  };

  return (
    <main style={myStyle}>
      <Card className="mx-auto p-10">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{documentToReactComponents(JSON.parse(data.allContentfulNews.nodes[0].newsHeading.raw))}</Accordion.Header>
            <Accordion.Body>{documentToReactComponents(JSON.parse(data.allContentfulNews.nodes[0].descriptionNews.raw))}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{documentToReactComponents(JSON.parse(data.allContentfulNews.nodes[1].newsHeading.raw))}</Accordion.Header>
            <Accordion.Body>{documentToReactComponents(JSON.parse(data.allContentfulNews.nodes[1].descriptionNews.raw))}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
      <ExampleCarousel data={data.contentfulExampleCarousel} />
    </main>
  );
}
