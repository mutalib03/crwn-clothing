import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = ({ key, title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otheritemsProps }) => (
        <CollectionItem key = {id} {...otheritemsProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview 