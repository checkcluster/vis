import './App.css';
import React, { useState } from 'react';

import Checkviz from './components/Checkviz';
import Explorer from './components/Explorer';

import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const App = (props) => {
  const classes = useStyles();

  // defaults
  let datasetList = [
    "mnist_pca",
    "fmnist_pca",
    "kmnist_pca",
    "mnist_tsne",
    "mnist_umap",
    "mnist_isomap",
  ];

  // let methodList = [
  //   "tsne",
  //   "umap",
  //   "pca",
  //   "isomap",
  // ];

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
  const width = 800;
  const height = 800;


  // const [method, setMethod] = useState(methodList[0]);
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
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-native-simple">Dataset</InputLabel>
              <Select
                native
                defaultValue={dataset}
                value={dataset}
                onChange={(event) => setDataset(event.target.value)}
                inputProps={{
                  name: 'dataset',
                  id: 'filled-age-native-simple',
                }}
                style={{ width: 180 }}
              >
                {datasetList.map((d, i) => (
                  <option key={i} value={d} >
                    {d}
                  </option>
                ))}
              </Select>
              {/* dataset:
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
            </Select> */}
            </FormControl>
          </div>

          {/* <div>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-method-native-simple">Method</InputLabel>
              <Select
                native
                value={method}
                onChange={(event) => setMethod(event.target.value)}
                inputProps={{
                  name: 'method',
                  id: 'filled-method-native-simple',
                }}
                style={{ width: 180 }}
              >
                {methodList.map((d, i) => (
                  <option key={i} value={d} >
                    {d}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div> */}

          <div>
            <FormControl variant="filled" className={classes.formControl}>

              <InputLabel htmlFor="filled-vis-native-simple">Visualization</InputLabel>
              <Select
                native
                value={displayMode}
                onChange={(event) => setDisplayMode(event.target.value)}
                inputProps={{
                  name: 'vis',
                  id: 'filled-vis-native-simple',
                }}
                style={{ width: 180 }}
              >
                {displayModeList.map((d, i) => (
                  <option key={i} value={d[1]} >
                    {d[0]}
                  </option>
                ))}
              </Select>

              {/* 
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
            </Select> */}
            </FormControl>

          </div>
        </div>

        <div className="App-main">
          <div
            id="cc"
          // style={{
          //   display: (["cc", "both"].indexOf(displayMode) > -1 ? "" : "none")
          // }}
          >
            {["cc", "bh"].indexOf(displayMode) > -1 &&
              <Explorer
                // method={method}
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
          <div id="separator" style={{ width: "5px" }}></div>
          <div id="cv">
            {["cv", "bh"].indexOf(displayMode) > -1 &&
              <Checkviz
                // method={method}
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
