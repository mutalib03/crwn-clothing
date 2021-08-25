import React from "react"
import { connect } from "react-redux"
import "./collection-overview.styles.scss";
import CollectionPreview from "../preview-collection/collection-preview.component"
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.reselect";


const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
    collections.map(({ id, ...otherCollectioProps }) => (
      <CollectionPreview key = {id} {...otherCollectioProps} />
    ))}
  </div>
);  


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview)