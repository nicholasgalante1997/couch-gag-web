import React, { useState } from 'react';
import { ContributeDropFileClassNames } from './classnames';
import classNames from 'classnames';
import { useFileUpload } from '@/hooks';

export function ContributeDropFileComponent(): React.JSX.Element {
  const [submittedFile, setSubmittedFile] = useState<File>();
  const [isDragging, setIsDragging] = useState(false);

  const fileUploadHookObject = useFileUpload();

  console.log(fileUploadHookObject);

  console.log(submittedFile);
  console.log(isDragging);

  function getDragDataAttr(): string {
    return isDragging ? 'active' : 'none';
  }

  function fileInputCallback(event: any): void {
    if (event?.target?.files?.length) {
      setSubmittedFile(event.target.files[0] as File);
    }
  }

  function requestFile(): void {
    const inputElementOnTheFly = document.createElement('input');
    inputElementOnTheFly.type = 'file';
    inputElementOnTheFly.multiple = true;
    inputElementOnTheFly.accept = '.pdf';
    inputElementOnTheFly.classList.add('non-visible-element');
    document.body.appendChild(inputElementOnTheFly);
    inputElementOnTheFly.onchange = fileInputCallback;
    inputElementOnTheFly.click();
    document.body.removeChild(inputElementOnTheFly);
  }

  function handleOnDragEnter(event: React.DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }

  function handleOnDragExit(event: React.DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }

  function handleDrop(event: React.DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSubmittedFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
  }

  function handleOnDragEnd(_event: React.DragEvent): void {
    _event.preventDefault();
    _event.stopPropagation();
    setIsDragging(false);
  }

  function handleOnDrag(event: React.DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  function onSubmit(): void {
    if (submittedFile) {
      fileUploadHookObject.upload(submittedFile);
    }
  }

  function renderDragAndDropMarkup(): React.JSX.Element {
    return (
      <div
      data-dragcurrent={getDragDataAttr()}
      onDragEnd={handleOnDragEnd}
      onDrop={handleDrop}
      onDragExit={handleOnDragExit}
      onDragOver={handleOnDrag}
      onDragEnter={handleOnDragEnter}
      onClick={requestFile}
      className={ContributeDropFileClassNames.Wrapper}
    >
      <p>Drop Or Click To Upload Your Files</p>
    </div>
    );
  }

  function renderHasCurrentFileMarkup(): React.JSX.Element {
    return (
      <div className={ContributeDropFileClassNames.FileWrapper}>
        <div className={ContributeDropFileClassNames.FileActionsWrapper}>
        <h1 className={ContributeDropFileClassNames.FileName}>{submittedFile?.name}</h1>
          <button onClick={requestFile} className={classNames(ContributeDropFileClassNames.FileActionsSelect, 'button-smpl')}>
            Choose Another Story
          </button>
        </div>
        <button onClick={onSubmit} className={classNames(ContributeDropFileClassNames.FileActionsSubmit, 'button-smpl')}>
          Submit
        </button>
      </div>
    );
  }

  return submittedFile ? renderHasCurrentFileMarkup() : renderDragAndDropMarkup();
}
