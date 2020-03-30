import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSiteList, unloadSiteList } from "../../redux/actions/asset.actions";
import SiteList from "../../components/SiteList";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

export default () => {
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiteList());
    return () => dispatch(unloadSiteList());
  }, []);

  if (!asset.sites) {
    return (
      <div id="main">
        <Nav selected={"sites"} />
        <div id="content">
          <Header />
          <div id="loading">loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div id="main">
      <Nav selected={"sites"} />
      <div id="content">
        <Header />
        <div className="content-wrap">
          <div className="box-header">
            <Link className="header-button" to="/sites/add">
              New Site
            </Link>
            <h2>My Sites</h2>
          </div>
          <SiteList data={asset.sites} />
        </div>
      </div>
    </div>
  );
};
