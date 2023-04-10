import { Card, Row, Col, Typography, Tooltip, Image } from "antd";

const { Title, Paragraph } = Typography;

const BeerCard: any = (props: any) => {
  const { imageUrl, title, description, tagline, ingredients } = props;

  return (
    <Card
      bordered={true}
      hoverable={true}
      style={{
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.2)",
        borderWidth: "1px",
        height: "200px",
      }}
    >
      <Row align={"middle"}>
        <Col xs={8} sm={8} md={4} lg={4}>
          <Tooltip title={`${ingredients}`} placement="top">
            <Image
              src={`${imageUrl}`}
              preview={false}
              alt="beer-image"
              style={{ height: "100px" }}
            />
          </Tooltip>
        </Col>
        <Col xs={16} sm={16} md={20} lg={20}>
          <Title level={3} ellipsis={{ rows: 1 }}>
            {title}
          </Title>
          <Paragraph
            // style={{ color: "yellow" }}
            style={{ color: "#B8860B" }}
            strong
            ellipsis={{ rows: 1 }}
          >
            {tagline}
          </Paragraph>
          <Paragraph ellipsis={{ rows: 2 }}>{`${description}`}</Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default BeerCard;
