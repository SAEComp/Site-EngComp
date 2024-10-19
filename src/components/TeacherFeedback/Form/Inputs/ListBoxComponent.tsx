import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

const LISTBOX_PADDING = 8; // Adjust based on your styles

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const option = data[index];

  return React.cloneElement(option, {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
}

const ListboxComponent = React.forwardRef(function ListboxComponent(props: any, ref) {
  const { children, ...other } = props;
  const itemCount = React.Children.count(children);
  const itemSize = 48; // Adjust based on your option height

  return (
    <div ref={ref} {...other}>
      <FixedSizeList
        height={Math.min(8, itemCount) * itemSize + 2 * LISTBOX_PADDING}
        itemCount={itemCount}
        itemSize={itemSize}
        width="100%"
        outerElementType={React.forwardRef((props, ref) => <div {...props} ref={ref} />)}
        innerElementType={React.forwardRef((props, ref) => <ul {...props} ref={ref} />)}
      >
        {({ index, style }) =>
          React.cloneElement(children[index], {
            style: {
              ...style,
              top: (style.top as number) + LISTBOX_PADDING,
            },
          })
        }
      </FixedSizeList>
    </div>
  );
});

export default ListboxComponent;
