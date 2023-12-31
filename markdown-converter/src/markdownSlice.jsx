import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";
import sanitize from "sanitize-html";

marked.setOptions({
  gfm: true,
  breaks: true
})

const initialState = {
  markdown: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```'){\n\t\treturn multiLineCode;\n\t}\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
  html: '',
};

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    insertMark: (state, action) => {
      state.markdown = action.payload;
      state.html = sanitize(marked.parse(action.payload));
    },
    transform: (state) => {
      state.html = marked.parse(state.markdown);
    }
  }
});

export const { insertMark, transform } = markdownSlice.actions;

export default markdownSlice.reducer;