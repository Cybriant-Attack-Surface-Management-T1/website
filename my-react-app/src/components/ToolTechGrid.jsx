import React from 'react';
import ToolTechCard from './ToolTechCard';
import styles from './ToolTechGridStyles.module.css';

// Define an array of tool data, manually add any number of these later
const toolTechArray = [
    {
      name: 'Tool 1',
      description: 'Description of Tool 1',
      imageUrl: 'path_to_image_1',
      link: 'https://example.com/tool-1',
    },
    {
      name: 'Tool 2',
      description: 'Description of Tool 2',
      imageUrl: 'path_to_image_2',
      link: 'https://example.com/tool-2',
    },
    {
      name: 'Tool 3',
      description: 'Description of Tool 3',
      imageUrl: 'path_to_image_3',
      link: 'https://example.com/tool-3',
    },
    {
      name: 'Tool 4',
      description: 'Description of Tool 4',
      imageUrl: 'path_to_image_4',
      link: 'https://example.com/tool-4',
    },
  ];
  
  function ToolTechGrid() {
    return (
      <div className={styles.toolTechGrid}>
        {/* Map through the toolTechs array and render a ToolTechCard for each item */}
        {toolTechArray.map((toolTechArray, index) => (
          <ToolTechCard
            key={index}
            name={toolTechArray.name}
            description={toolTechArray.description}
            imageUrl={toolTechArray.imageUrl}
            link={toolTechArray.link}
          />
        ))}
      </div>
    );
  }
  
  export default ToolTechGrid;
