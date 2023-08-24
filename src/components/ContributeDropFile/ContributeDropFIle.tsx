import React, { useState } from 'react';
import { ContributeDropFileClassNames } from './classnames';

export function ContributeDropFileComponent(): React.JSX.Element {
  const [submittedFile, setSubmittedFile] = useState<File>();

  function fileInputCallback(event: any): void {
    if (event?.target?.files?.length) {
      setSubmittedFile(event.target.files[0] as File);
    }
  }

  console.log(submittedFile);

  function requestFile(): void {
    const inputElementOnTheFly = document.createElement('input');
    inputElementOnTheFly.type = 'file';
    inputElementOnTheFly.multiple = true;
    inputElementOnTheFly.classList.add('non-visible-element');
    document.body.appendChild(inputElementOnTheFly);
    inputElementOnTheFly.onchange = fileInputCallback;
    inputElementOnTheFly.click();
    document.body.removeChild(inputElementOnTheFly);
  }

  return <div onClick={requestFile} className={ContributeDropFileClassNames.Wrapper}></div>;
}
