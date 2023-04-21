import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import makeData from "./makeData";
import Table from "./Table";
import PropTypes from 'prop-types';
import { randomColor, shortId } from "./utils";
import { grey } from "./colors";
import { TextInput, useRecordContext } from "react-admin";
import { Product } from "../../../types";
import { useFormContext } from 'react-hook-form';

function reducer(state: any, action: any) {
    switch (action.type) {
      case "add_option_to_column":
        const optionIndex = state.columns.findIndex(
          (column: any) => column.id === action.columnId
        );
        return {
          ...state,
          skipReset: true,
          columns: [
            ...state.columns.slice(0, optionIndex),
            {
              ...state.columns[optionIndex],
              options: [
                ...state.columns[optionIndex].options,
                { label: action.option, backgroundColor: action.backgroundColor }
              ]
            },
            ...state.columns.slice(optionIndex + 1, state.columns.length)
          ]
        };
      case "add_row":
        return {
          ...state,
          skipReset: true,
          data: [...state.data, {}]
        };
      case "update_column_type":
        const typeIndex = state.columns.findIndex(
          (column: any) => column.id === action.columnId
        );
        switch (action.dataType) {
          case "number":
            if (state.columns[typeIndex].dataType === "number") {
              return state;
            } else {
              return {
                ...state,
                columns: [
                  ...state.columns.slice(0, typeIndex),
                  { ...state.columns[typeIndex], dataType: action.dataType },
                  ...state.columns.slice(typeIndex + 1, state.columns.length)
                ],
                data: state.data.map((row: any) => ({
                  ...row,
                  [action.columnId]: isNaN(row[action.columnId])
                    ? ""
                    : Number.parseInt(row[action.columnId])
                }))
              };
            }
          case "select":
            if (state.columns[typeIndex].dataType === "select") {
              return {
                ...state,
                columns: [
                  ...state.columns.slice(0, typeIndex),
                  { ...state.columns[typeIndex], dataType: action.dataType },
                  ...state.columns.slice(typeIndex + 1, state.columns.length)
                ],
                skipReset: true
              };
            } else {
              let options: any = [];
              state.data.forEach((row: any) => {
                if (row[action.columnId]) {
                  options.push({
                    label: row[action.columnId],
                    backgroundColor: randomColor()
                  });
                }
              });
              return {
                ...state,
                columns: [
                  ...state.columns.slice(0, typeIndex),
                  {
                    ...state.columns[typeIndex],
                    dataType: action.dataType,
                    options: [...state.columns[typeIndex].options, ...options]
                  },
                  ...state.columns.slice(typeIndex + 1, state.columns.length)
                ],
                skipReset: true
              };
            }
          case "text":
            if (state.columns[typeIndex].dataType === "text") {
              return state;
            } else if (state.columns[typeIndex].dataType === "select") {
              return {
                ...state,
                skipReset: true,
                columns: [
                  ...state.columns.slice(0, typeIndex),
                  { ...state.columns[typeIndex], dataType: action.dataType },
                  ...state.columns.slice(typeIndex + 1, state.columns.length)
                ]
              };
            } else {
              return {
                ...state,
                skipReset: true,
                columns: [
                  ...state.columns.slice(0, typeIndex),
                  { ...state.columns[typeIndex], dataType: action.dataType },
                  ...state.columns.slice(typeIndex + 1, state.columns.length)
                ],
                data: state.data.map((row: any) => ({
                  ...row,
                  [action.columnId]: row[action.columnId] + ""
                }))
              };
            }
          default:
            return state;
        }
      case "update_column_header":
        const index = state.columns.findIndex(
          (column: any) => column.id === action.columnId
        );
        return {
          ...state,
          skipReset: true,
          columns: [
            ...state.columns.slice(0, index),
            { ...state.columns[index], label: action.label },
            ...state.columns.slice(index + 1, state.columns.length)
          ]
        };
      case "update_cell":
        return {
          ...state,
          skipReset: true,
          data: state.data.map((row: any, index: any) => {
            if (index === action.rowIndex) {
              return {
                ...state.data[action.rowIndex],
                [action.columnId]: action.value
              };
            }
            return row;
          })
        };
      case "add_column_to_left":
        const leftIndex = state.columns.findIndex(
          (column: any) => column.id === action.columnId
        );
        let leftId = shortId();
        return {
          ...state,
          skipReset: true,
          columns: [
            ...state.columns.slice(0, leftIndex),
            {
              id: leftId,
              label: "Column",
              accessor: leftId,
              dataType: "text",
              created: action.focus && true,
              options: []
            },
            ...state.columns.slice(leftIndex, state.columns.length)
          ]
        };
      case "add_column_to_right":
        const rightIndex = state.columns.findIndex(
          (column: any) => column.id === action.columnId
        );
        const rightId = shortId();
        return {
          ...state,
          skipReset: true,
          columns: [
            ...state.columns.slice(0, rightIndex + 1),
            {
              id: rightId,
              label: "Column",
              accessor: rightId,
              dataType: "text",
              created: action.focus && true,
              options: []
            },
            ...state.columns.slice(rightIndex + 1, state.columns.length)
          ]
        };
      case "delete_column":
        const deleteIndex = state.columns.findIndex(
          (column: any) => column.id === action.columnId
        );
        return {
          ...state,
          skipReset: true,
          columns: [
            ...state.columns.slice(0, deleteIndex),
            ...state.columns.slice(deleteIndex + 1, state.columns.length)
          ]
        };
      case "enable_reset":
        return {
          ...state,
          skipReset: false
        };
      default:
        return state;
    }
  }

const ProductIngredientTable = ({...props}) => {
    const record = useRecordContext<Product>(props);
    const defaultRecord = {
      columns: [{"id":"name","label":"Composition","accessor":"name","minWidth":60,"dataType":"text","options":[]},{"id":"calories","label":"Pro Tablette - per Tablet","accessor":"calories","minWidth":60,"dataType":"text","options":[]},{"id":"unit","label":"Einheit - Unit","accessor":"unit","width":60,"dataType":"text","options":[]},{"id":"nrv","label":"%NRV*","accessor":"nrv","width":60,"dataType":"text","options":[]},{"id":999999,"width":20,"label":"+","disableResizing":true,"dataType":"null"}],
      data: []
    };
    const { setValue } = useFormContext();
    // console.log('table', record, props);
    const [state, dispatch] = useReducer(reducer, makeData(record ? record.ingredients : defaultRecord));

    // const {changeHandler} = props;
    useEffect(() => {
        dispatch({ type: "enable_reset" });
        setValue('ingredients', {columns: state.columns, data: state.data});
    }, [state.data, state.columns]);

    
    return (
        <div style={{ overflow: "auto", display: "flex" }}>
            <div
            style={{
                flex: "1 1 auto",
                padding: "1rem",
                maxWidth: 1000,
                marginLeft: "auto",
                marginRight: "auto"
            }}
            >
            <Table
                columns={state.columns}
                data={state.data}
                dispatch={dispatch}
                skipReset={state.skipReset}
            />
            </div>
        </div>
    );
};

ProductIngredientTable.propTypes = {
  record: PropTypes.any,
  // changeHandler: PropTypes.func,
};


export default ProductIngredientTable;