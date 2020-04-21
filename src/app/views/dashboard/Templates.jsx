import React, { useState } from "react";
import { Breadcrumb, RichTextEditor } from "matx";
import { Card, TextField, MenuItem, Button } from "@material-ui/core";

const Templates = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (contentHtml) => {
    setContent(contentHtml);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Template" }]} />
      </div>
      <Card className="px-6 py-4 flex flex-wrap items-center mb-6">
        <h5 className="my-0 mr-8">Live Template</h5>
        <TextField
          className="my-4 mr-4 min-w-200"
          name="SelectedWaiver"
          variant="outlined"
          size="small"
          select
        >
          <MenuItem value="1">item 1</MenuItem>
          <MenuItem value="2">item 2</MenuItem>
          <MenuItem value="3">item 3</MenuItem>
        </TextField>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Card>

      <Card className="p-6">
        <TextField
          className="mb-6 min-w-200"
          name="SelectedWaiver"
          variant="outlined"
          size="small"
          select
          defaultValue="1"
        >
          <MenuItem value="1">item 1</MenuItem>
          <MenuItem value="2">item 2</MenuItem>
          <MenuItem value="3">item 3</MenuItem>
        </TextField>
        <div className="mb-6">
          <RichTextEditor
            content={content}
            handleContentChange={handleContentChange}
            placeholder="insert text here..."
          />
        </div>
        <Button variant="contained" color="secondary" className="mr-4">
          Delete
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Card>
    </div>
  );
};

export default Templates;
