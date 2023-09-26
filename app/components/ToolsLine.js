export default function ToolsLine(props = {}) {
  const { groups = [] } = props;
  
  const toolGroups = [];
  
  groups.forEach(group => {
    const toolGroup = {
      tag: "div",
      options: {
        classList: "mte-tool-group",
        children: []
      }
    }
    const tools = [];
    if (Array.isArray(group)) {
      group.forEach(tool => {
        tools.push(tool);
      });
    }
    
    toolGroup.options.children =tools;
    toolGroups.push(toolGroup);
  });
  
  return {
    tag: "div",
    options: {
      classList: "mte-tool-line",
      children: toolGroups.length ? toolGroups : null
    },
  }
}