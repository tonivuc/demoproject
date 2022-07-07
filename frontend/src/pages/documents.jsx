import { Col, Row } from "react-bootstrap";
import DocumentTypesList from "../components/documentTypesList";
import DynamicFileUploadForm from "../components/dynamicFileUploadForm";

function DocumentsPage() {
  const optionalDocuments = ["Sick leave form", "Cat at work form", "CV"];
  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>Upload required documents and optional ones</h3>
          <DynamicFileUploadForm></DynamicFileUploadForm>
        </Col>
        <Col sm={6}>
          <h3>Choose optional documents to upload</h3>
          <DocumentTypesList documentTypes={optionalDocuments} />
        </Col>
      </Row>
    </>
  );
}

export default DocumentsPage;
