import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/ComponentCard';
import FalconEditor from 'components/common/Editor';

const sizingWidthCode = `<>
  <div className="bg-body-tertiary text-dark p-2 border border-dashed mb-3 w-100"><code>.w-100</code></div>
  <div className="bg-body-tertiary text-dark p-2 border border-dashed mb-3 w-75"><code>.w-75</code></div>
  <div className="bg-body-tertiary text-dark p-2 border border-dashed mb-3 w-50"><code>.w-50</code></div>
  <div className="bg-body-tertiary text-dark p-2 border border-dashed mb-3 w-25"><code>.w-25</code></div>
  <div className="bg-body-tertiary text-dark p-2 border border-dashed mb-3 w-auto"><code>.w-auto</code></div>
</>`;

const sizingHeightCode = `<>
  <div className="vh-50 text-dark py-3">
    <Row className="g-4 h-100">
      <Col>
        <div className="bg-body-tertiary p-2 border border-dashed mb-3 h-100">
          <code>.h-100</code>
        </div>
      </Col>
      <Col>
        <div className="bg-body-tertiary p-2 border border-dashed mb-3 h-75">
          <code>.h-75</code>
        </div>
      </Col>
      <Col>
        <div className="bg-body-tertiary p-2 border border-dashed mb-3 h-50">
          <code>.h-50</code>
        </div>
      </Col>
      <Col>
        <div className="bg-body-tertiary p-2 border border-dashed mb-3 h-25">
          <code>.h-25</code>
        </div>
      </Col>
      <Col>
        <div className="bg-body-tertiary p-2 border border-dashed mb-3 h-auto">
          <code>.h-auto</code>
        </div>
      </Col>
    </Row>
  </div>
</>`;

const specialClassesCode = `.min-vw-100 { minWidth: 100vw; }
.vw-100 { width: 100vw; }
.max-vh-100 { maxHeight: 100vh; }
.max-vh-75 { maxHeight: 75vh; }
.max-vh-50 { maxHeight: 50vh; }
.max-vh-25 { maxHeight: 25vh; }
.min-vh-100 { minHeight: 100vh; }
.min-vh-75 { minHeight: 75vh; }
.min-vh-50 { minHeight: 50vh; }
.min-vh-25 { minHeight: 25vh; }
.vh-100 { height: 100vh !important; }
.vh-75 { height: 75vh !important; }
.vh-50 { height: 50vh !important; }
.vh-25 { height: 25vh !important; }
.max-vh-sm-100 { maxHeight: 100vh; }
.max-vh-sm-75 { maxHeight: 75vh; }
.max-vh-sm-50 { maxHeight: 50vh; }
.max-vh-sm-25 { maxHeight: 25vh; }
.min-vh-sm-100 { minHeight: 100vh; }
.min-vh-sm-75 { minHeight: 75vh; }
.min-vh-sm-50 { minHeight: 50vh; }
.min-vh-sm-25 { minHeight: 25vh; }
.vh-sm-100 { height: 100vh !important; }
.vh-sm-75 { height: 75vh !important; }
.vh-sm-50 { height: 50vh !important; }
.vh-sm-25 { height: 25vh !important; }
.max-vh-md-100 { maxHeight: 100vh; }
.max-vh-md-75 { maxHeight: 75vh; }
.max-vh-md-50 { maxHeight: 50vh; }
.max-vh-md-25 { maxHeight: 25vh; }
.min-vh-md-100 { minHeight: 100vh; }
.min-vh-md-75 { minHeight: 75vh; }
.min-vh-md-50 { minHeight: 50vh; }
.min-vh-md-25 { minHeight: 25vh; }
.vh-md-100 { height: 100vh !important; }
.vh-md-75 { height: 75vh !important; }
.vh-md-50 { height: 50vh !important; }
.vh-md-25 { height: 25vh !important; }
.max-vh-lg-100 { maxHeight: 100vh; }
.max-vh-lg-75 { maxHeight: 75vh; }
.max-vh-lg-50 { maxHeight: 50vh; }
.max-vh-lg-25 { maxHeight: 25vh; }
.min-vh-lg-100 { minHeight: 100vh; }
.min-vh-lg-75 { minHeight: 75vh; }
.min-vh-lg-50 { minHeight: 50vh; }
.min-vh-lg-25 { minHeight: 25vh; }
.vh-lg-100 { height: 100vh !important; }
.vh-lg-75 { height: 75vh !important; }
.vh-lg-50 { height: 50vh !important; }
.vh-lg-25 { height: 25vh !important; }
.max-vh-xl-100 { maxHeight: 100vh; }
.max-vh-xl-75 { maxHeight: 75vh; }
.max-vh-xl-50 { maxHeight: 50vh; }
.max-vh-xl-25 { maxHeight: 25vh; }
.min-vh-xl-100 { minHeight: 100vh; }
.min-vh-xl-75 { minHeight: 75vh; }
.min-vh-xl-50 { minHeight: 50vh; }
.min-vh-xl-25 { minHeight: 25vh; }
.vh-xl-100 { height: 100vh !important; }
.vh-xl-75 { height: 75vh !important; }
.vh-xl-50 { height: 50vh !important; }
.vh-xl-25 { height: 25vh !important; }
.max-vh-xxl-100 { maxHeight: 100vh; }
.max-vh-xxl-75 { maxHeight: 75vh; }
.max-vh-xxl-50 { maxHeight: 50vh; }
.max-vh-xxl-25 { maxHeight: 25vh; }
.min-vh-xxl-100 { minHeight: 100vh; }
.min-vh-xxl-75 { minHeight: 75vh; }
.min-vh-xxl-50 { minHeight: 50vh; }
.min-vh-xxl-25 { minHeight: 25vh; }
.vh-xxl-100 { height: 100vh !important; }
.vh-xxl-75 { height: 75vh !important; }
.vh-xxl-50 { height: 50vh !important; }
.vh-xxl-25 { height: 25vh !important; }`;

const Sizing = () => (
  <>
    <PageHeader title="Sizing" className="mb-3">
      <p className="my-2">
        Easily make an element as wide or as tall (relative to its parent) with
        our width and height
      </p>
      <p className="mb-0">
        utilities. Includes support for{' '}
        <code className="highlighter-rouge">25%</code>,{' '}
        <code className="highlighter-rouge">50%</code>,{' '}
        <code className="highlighter-rouge"> 75%</code>, and{' '}
        <code className="highlighter-rouge">100%</code> by default. The classes
        are named using the format
        <code>
          {'{property}'}-{'{size}'}
        </code>
        for <code>xs</code> and
        <code>
          {'{property}'}-{'{breakpoint}'}-{'{size}'}
        </code>
        for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>{' '}
        and <code>xxl</code>.
      </p>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Width (relative to parent)" />
      <FalconComponentCard.Body code={sizingWidthCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Height (relative to parent)" />
      <FalconComponentCard.Body code={sizingHeightCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Special classes (relative to viewport)"
        noPreview
      >
        <p className="mt-2 mb-0">
          Responsive variations also exist for sizing classes relative to the{' '}
          <code>viewport</code>. Here are all the support classes:
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body>
        <FalconEditor
          code={specialClassesCode}
          language="jsx"
          hidePreview
          className="p-2"
        />
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default Sizing;
