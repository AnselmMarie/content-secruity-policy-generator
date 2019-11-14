/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../../components/heading.component';
import DisplaySrcComponent from './display.src.component.view';
/* Route Content */
import './generate.scss';
/* Config */
import { GENERATE_ROUTE, GLOBAL_CONTENT } from '../../configs/constants/content.constants';

/**
 * @function createMarkup
 * @desc safely set up content to be use as HTML
 */
const createMarkup = () => {
  return {
    __html: GENERATE_ROUTE.SUB_TITLE
  }
}

/**
 * @function Generate View
 * @desc rendering the view for the generate route
 * @param $this - class contents
 */
export default ($this: any): JSX.Element => {
  return (
    <>

      <HeadingComponent heading='h1'>
        {GENERATE_ROUTE.TITLE}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.cspGenerate} />

      {$this.state.cspGenerate && <p className="csp-note" dangerouslySetInnerHTML={createMarkup()} />}

      <hr className="generate-hr" />

      <HeadingComponent heading='h2'>
        {GLOBAL_CONTENT.DEFAULT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.defaultData} />

      <HeadingComponent heading='h2'>
      {GLOBAL_CONTENT.IMG_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.imgData} />

      <HeadingComponent heading='h2'>
      {GLOBAL_CONTENT.STYLE_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.styleData} />

      <HeadingComponent heading='h2'>
      {GLOBAL_CONTENT.SCRIPT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.scriptData} />

      <HeadingComponent heading='h2'>
      {GLOBAL_CONTENT.FRAME_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.frameData} />

      <HeadingComponent heading='h2'>
      {GLOBAL_CONTENT.FONT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.fontData} />

      <HeadingComponent heading='h2'>
      {GLOBAL_CONTENT.OBJECT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.objectData} />

    </>
  );
}
