import React from "react";
import { useState } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";
const LabTestComponent = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <Group justify="center">
        <FileButton
          className="bg-black"
          onChange={setFiles}
          accept="image/png,image/jpeg"
          multiple
        >
          {(props) => <Button {...props}>Upload You Test Result Here</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
};

export default LabTestComponent;
