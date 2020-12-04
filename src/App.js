import './App.css';
import React, { useState } from 'react';

import Checkviz from './components/Checkviz';
import Explorer from './components/Explorer';

import Select from '@material-ui/core/Select';

const App = (props) => {
  // defaults
  let datasetList = [
    "mnist_sampled_2",
    "fmnist_sampled_2",
    "kmnist_sampled_2"
  ];

  let methodList = [
    "tsne",
    "umap",
    "pca",
    "isomap",
  ];

  let displayModeList = [
    ["CheckCluster", "cc"],
    ["CheckViz", "cv"],
    ["Both", "bh"],
  ]

  // let method = "tsne";
  // let dataset = "mnist_sampled_2";
  const isLabel = true;
  const showMissing = true;
  const showFalse = true;
  const radius = 2;
  const stroke = 5;
  const width = 700;
  const height = 700;


  const [method, setMethod] = useState(methodList[0]);
  const [dataset, setDataset] = useState(datasetList[0]);
  const [displayMode, setDisplayMode] = useState(displayModeList[0][1]);

  return (
    <div id="App-wrapper">
      <div id="App-header">
        <div id="App-title">CheckCluster - Explaining the Cluster Reliability of Multidimensional Projections</div>
      </div>
      <div className="App-container">
        <div className="App-sidebar">
          <div>
            dataset: 
            <Select
              id={"datasetSelection"}
              value={dataset}
              onChange={(event) => setDataset(event.target.value)}
              style={{ width: "90px", fontSize: "12px" }}
              native
            >
              {datasetList.map((d, i) => (
                <option key={i} value={d} >
                  {d}
                </option>
              ))}
            </Select>
          </div>

          <div>
            method: 
            <Select
              id={"methodSelection"}
              value={method}
              onChange={(event) => setMethod(event.target.value)}
              style={{ width: "90px", fontSize: "12px" }}
              native
            >
              {methodList.map((d, i) => (
                <option key={i} value={d} >
                  {d}
                </option>
              ))}
            </Select>
          </div>

          <div>
            Visualization: 
            <Select
              id={"displayModeSelection"}
              value={displayMode}
              onChange={(event) => setDisplayMode(event.target.value)}
              style={{ width: "90px", fontSize: "12px" }}
              native
            >
              {displayModeList.map((d, i) => (
                <option key={i} value={d[1]} >
                  {d[0]}
                </option>
              ))}
            </Select>
          </div>
          
        </div>
        <div className="App-main">
          <div 
            id="cc"
            // style={{
            //   display: (["cc", "both"].indexOf(displayMode) > -1 ? "" : "none")
            // }}
          >
            { ["cc", "bh"].indexOf(displayMode) > -1 && 
            <Explorer
              method={method}
              dataset={dataset}
              isLabel={isLabel}
              showMissing={showMissing}
              showFalse={showFalse}
              radius={radius}
              stroke={stroke}
              width={width}
              height={height}
            />
            }
          </div>
          <div id="cv">
            { ["cv", "bh"].indexOf(displayMode) > -1 && 
            <Checkviz
              method={method}
              dataset={dataset}
              isLabel={isLabel}
              radius={radius}
              width={width}
              height={height}
            />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
