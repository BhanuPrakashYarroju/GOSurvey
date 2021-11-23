import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const MyComponent = () => {
const [copySuccess, setCopySuccess] = useState('');

// your function to copy here

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

return (
 <div>
    <Button onClick={() => copyToClipBoard('http://localhost:3000/preview')} endIcon={<ContentCopyIcon/>}>
    http://localhost:3000/preview
     </Button>
  
  {copySuccess}
 </div>
)
}
export default MyComponent;