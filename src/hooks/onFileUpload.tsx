import { useEffect, useState } from 'react';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { useS3Context } from '@/contexts';
import { v4 as v4uuid } from 'uuid';

interface UseFileUploadObject {
  upload: (file: File) => void;
  succeeded: boolean;
  failed: boolean;
  idle: boolean;
  loading: boolean;
  error?: Error | string;
  submissionId?: string;
}

export const useFileUpload = function (): UseFileUploadObject {
  const [succeeded, setSucceeded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [idle, setIdle] = useState(true);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<Error | string>();
  const [submissionId, setSubmissionId] = useState<string>();

  const { client } = useS3Context();

  function buildAndSetFileName(): string {
    const uId = v4uuid();
    setSubmissionId(uId);
    return `pdf-story-uploads/${uId}-${file?.name ?? ''}`;
  }

  async function uploadFile(): Promise<void> {
    let localDidErrorFlag = false;
    try {
      setIdle(false);
      setLoading(true);
      const objectKey = buildAndSetFileName();

      const params = {
        Bucket: 'couch-gag-story-submissions', // Replace with your bucket name
        Key: objectKey,
        Body: file
      };

      try {
        const command = new PutObjectCommand(params);
        const data = await client.send(command);
        console.log('File uploaded successfully:', data);
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    } catch (e) {
      setError(e as Error);
      localDidErrorFlag = true;
    } finally {
      if (localDidErrorFlag) {
        setSucceeded(false);
        setFailed(true);
      } else {
        setSucceeded(true);
        setFailed(false);
      }
      setIdle(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (typeof file !== 'undefined') {
      void (async () => await uploadFile())();
    }
  }, [file]);

  function upload(_file: File): void {
    setFile(_file);
  }

  return {
    succeeded,
    failed,
    loading,
    idle,
    error,
    submissionId,
    upload
  };
};
