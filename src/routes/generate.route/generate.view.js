/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../../components/heading.component';
import DisplaySrcComponent from './display.src.component.view';
/* Route Content */
import './generate.scss';

/**
 * @function Generate View
 * @desc rendering the view for the generate route
 * @author Anselm Marie
 * @param {object} $this - class contents
 */
export default ($this) => {
  return (
    <>

      <HeadingComponent heading='h2'>
        Summary
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.cspGenerate} />

      <HeadingComponent heading='h3'>
        Breakdown
      </HeadingComponent>

      <HeadingComponent heading='h4'>
        DEFAULT-SRC
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.defaultData} />

      <HeadingComponent heading='h4'>
        IMG-SRC
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.imgData} />

      <HeadingComponent heading='h4'>
        STYLE-SRC
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.styleData} />

      <HeadingComponent heading='h4'>
        SCRIPT-SRC
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.scriptData} />

      <HeadingComponent heading='h4'>
        FRAME-SRC
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.frameData} />

      <HeadingComponent heading='h4'>
        FONT-SRC
      </HeadingComponent>
      <DisplaySrcComponent data={$this.state.fontData} />

    </>
  );
}
