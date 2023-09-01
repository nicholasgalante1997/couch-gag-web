import React, { useState } from 'react';
import { ContributeDropFileClassNames } from './classnames';
import { ErrorCode } from '../ErrorCode';
import { InfiniteProgress } from '../InfiniteProgress';
import classNames from 'classnames';
import { useFileUpload } from '@/hooks';
import { useTranslation } from '@/contexts';

export function ContributeDropFileComponent(): React.JSX.Element {
  const [submittedFile, setSubmittedFile] = useState<File>();
  const [isDragging, setIsDragging] = useState(false);

  const { failed, loading, succeeded, submissionId, error, upload } = useFileUpload();
  const { t } = useTranslation();

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
    inputElementOnTheFly.multiple = false;
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
      upload(submittedFile);
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
        <p>{t('contribute__dropfile')}</p>
      </div>
    );
  }

  function renderHasCurrentFileMarkup(): React.JSX.Element {
    return (
      <div className={ContributeDropFileClassNames.FileWrapper}>
        <div className={ContributeDropFileClassNames.FileActionsWrapper}>
          <h1 className={ContributeDropFileClassNames.FileName}>{submittedFile?.name}</h1>
          <button
            onClick={requestFile}
            className={classNames(ContributeDropFileClassNames.FileActionsSelect, 'button-smpl')}
          >
            {t('contribute__choose_another_story_action')}
          </button>
        </div>
        <button
          onClick={onSubmit}
          className={classNames(ContributeDropFileClassNames.FileActionsSubmit, 'button-smpl')}
        >
          {t('contribute__submit_action')}
        </button>
      </div>
    );
  }

  function renderUploadErroredMarkup(): React.JSX.Element {
    return <ErrorCode code={500} id="FileUploadError" error={t('contribute__error_text')} />;
  }

  function renderUploadSucceededMarkup(): React.JSX.Element {
    return (
      <div className={ContributeDropFileClassNames.SuccessfulUploadWrapper}>
        <div className={ContributeDropFileClassNames.SuccessfulUploadTextWrapper}>
          <h1 className={ContributeDropFileClassNames.SuccessfulUploadTitle}>
            {`${t('contribute__file_uploaded') ?? ''} ${submissionId ?? ''}`}
          </h1>
          <p className={ContributeDropFileClassNames.SuccessfulUploadSubtext}>
            {t('contribute__file-uploaded-subtext')}
          </p>
        </div>
        <button className={classNames(ContributeDropFileClassNames.SuccessfulUploadDismiss, 'button-smpl')}>
          {t('contribute__dismiss-action')}
        </button>
      </div>
    );
  }

  function renderLoadingMarkup(): React.JSX.Element {
    return (
      <div className={ContributeDropFileClassNames.LoadingWrapper}>
        <InfiniteProgress size="Large" />
      </div>
    );
  }

  function getMarkup(): React.JSX.Element {
    if (failed || error) {
      return renderUploadErroredMarkup();
    }

    if (succeeded && submissionId) {
      return renderUploadSucceededMarkup();
    }

    if (loading) {
      return renderLoadingMarkup();
    }

    if (submittedFile) {
      return renderHasCurrentFileMarkup();
    }

    return renderDragAndDropMarkup();
  }

  return getMarkup();
}
