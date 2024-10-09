import React from 'react';
import { Table, Alert } from 'react-bootstrap';

const Results = ({ results }) => {
  if (!results || Object.keys(results).length === 0) return null;

  if (results.error) {
    return <Alert variant="danger">{results.error}</Alert>;
  }

  return (
    <>
      {results.ipInfo && (
        <div>
          <h3>IP Information (via ipinfo.io)</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results.ipInfo).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{JSON.stringify(value)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {results.abuseInfo && (
        <div>
          <h3>IP Abuse Report (via AbuseIPDB)</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results.abuseInfo).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{JSON.stringify(value)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {results.data && (
        <div>
          <h3>Email Verification (via Hunter.io)</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results.data).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{JSON.stringify(value)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Results;
