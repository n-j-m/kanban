import React from "react";

import { startResizer } from "../utils";

import "../styles/main.scss";

export default class App extends React.Component {

  componentDidMount() {
    startResizer(React.findDOMNode(this));
  }

  render() {
    const cards = [1, 2, 3, 4];

    const style = {
      width: (260 * cards.length) + (10 * cards.length) + 280 /* AddCard width*/
    };
    let statusClass = "fa-square-o";
    return (
      <div className="flex-container" style={style}>
        <div className="panel panel-default">
          <div className="panel-heading">
            Some Card Title
            <i className="fa fa-ellipsis-v pull-right card-settings"></i>
          </div>
          <div className="list-group items">
            <div className="list-group-item item">
              Some Item Title
              <i className={("fa " + statusClass + " status pull-right")}></i>
            </div>
            <div>
              <div className="list-group-item item-controls">
                <div className="input-group">
                  <input ref="itemInput" className="form-control entry" placeholder="Add item..." />
                  <span className="input-group-btn">
                    <button ref="saveButton" className="btn btn-default">
                      <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-default">
                      <i className="fa fa-close"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <span>Tester</span>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Some Card Title
            <i className="fa fa-ellipsis-v pull-right card-settings"></i>
          </div>
          <div className="list-group items">
            <div className="list-group-item item">
              Some Item Title
              <i className={("fa " + statusClass + " status pull-right")}></i>
            </div>
            <div>
              <div className="list-group-item item-controls">
                <div className="input-group">
                  <input ref="itemInput" className="form-control entry" placeholder="Add item..." />
                  <span className="input-group-btn">
                    <button ref="saveButton" className="btn btn-default">
                      <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-default">
                      <i className="fa fa-close"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <span>Tester</span>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Some Card Title
            <i className="fa fa-ellipsis-v pull-right card-settings"></i>
          </div>
          <div className="list-group items">
            <div className="list-group-item item">
              Some Item Title
              <i className={("fa " + statusClass + " status pull-right")}></i>
            </div>
            <div>
              <div className="list-group-item item-controls">
                <div className="input-group">
                  <input ref="itemInput" className="form-control entry" placeholder="Add item..." />
                  <span className="input-group-btn">
                    <button ref="saveButton" className="btn btn-default">
                      <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-default">
                      <i className="fa fa-close"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <span>Tester</span>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Some Card Title
            <i className="fa fa-ellipsis-v pull-right card-settings"></i>
          </div>
          <div className="list-group items">
            <div className="list-group-item item">
              Some Item Title
              <i className={("fa " + statusClass + " status pull-right")}></i>
            </div>
            <div>
              <div className="list-group-item item-controls">
                <div className="input-group">
                  <input ref="itemInput" className="form-control entry" placeholder="Add item..." />
                  <span className="input-group-btn">
                    <button ref="saveButton" className="btn btn-default">
                      <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-default">
                      <i className="fa fa-close"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <span>Tester</span>
          </div>
        </div>
      </div>
    );
  }
}
