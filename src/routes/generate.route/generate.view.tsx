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
 * @function Generate View
 * @desc rendering the view for the generate route
 * @param $this - class contents
 */
export default ($this: any): JSX.Element => {
  return (
    <>

      <HeadingComponent heading='h2'>
        {GENERATE_ROUTE.TITLE}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.cspGenerate} />

      <HeadingComponent heading='h3'>
        {GENERATE_ROUTE.SUB_TITLE}
      </HeadingComponent>

      <HeadingComponent heading='h4'>
        {GLOBAL_CONTENT.DEFAULT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.defaultData} />

      <HeadingComponent heading='h4'>
      {GLOBAL_CONTENT.IMG_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.imgData} />

      <HeadingComponent heading='h4'>
      {GLOBAL_CONTENT.STYLE_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.styleData} />

      <HeadingComponent heading='h4'>
      {GLOBAL_CONTENT.SCRIPT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.scriptData} />

      <HeadingComponent heading='h4'>
      {GLOBAL_CONTENT.FRAME_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.frameData} />

      <HeadingComponent heading='h4'>
      {GLOBAL_CONTENT.FONT_SRC}
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.fontData} />

    </>
  );
}
