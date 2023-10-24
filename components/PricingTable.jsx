"use client";
import {
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Editable,
  EditablePreview,
  EditableInput,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPlus, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

const EditableData = ({
  id,
  parentColumn,
  attribute,
  defaultValue,
  onChange,
}) => {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    if (!data) return;
    if (data == "label") {
      toast.warning("label is a reserved keyword, please use something else");
      setData("");
      return;
    }
    onChange({
      id: id,
      plan: parentColumn,
      attribute: attribute,
      value: data,
    });
  }, [data]);

  return (
    <>
      <Editable value={data} onChange={(value) => setData(value)} w={"full"}>
        <EditablePreview w={"full"} />
        <EditableInput w={"24"} />
      </Editable>
    </>
  );
};

const PricingTable = ({ data = [], size }) => {
  const [plans, setPlans] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [tableData, setTableData] = useState([
    {
      id: "0",
      plan: "Basic",
      attribute: "label",
      value: "Pages",
    },
    {
      id: "0.0",
      plan: "Basic",
      attribute: "Pages",
      value: "5",
    },
    {
      id: "0.1",
      plan: "Gold",
      attribute: "Pages",
      value: "10",
    },
    {
      id: "0.2",
      plan: "Premium",
      attribute: "Pages",
      value: "10+",
    },
  ]);

  useEffect(() => {
    if (tableData.length) {
      const allPlans = [];
      const labels = [];
      const groupedData = {};

      tableData.forEach((item) => {
        const { attribute, ...rest } = item;
        if (attribute === "label") {
          labels.push({ value: rest.value, id: rest.id });
        } else {
          if (!groupedData[attribute]) {
            groupedData[attribute] = [rest];
          } else {
            groupedData[attribute].push(rest);
          }
        }

        if (!allPlans.includes(item.plan)) {
          allPlans.push(item.plan);
        }
      });

      setPlans(allPlans);
      setRowData(groupedData);
      setAttributes(labels);
      console.log("Grouped Data");
      console.log(groupedData);
    }
  }, [tableData]);

  function handleDataUpdate(data) {
    const { id, ...rest } = data;
    let updatedTableData = [...tableData];

    // Find the index of the item with the matching ID
    const itemIndex = updatedTableData.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // Update the item with the new data
      updatedTableData[itemIndex] = {
        ...updatedTableData[itemIndex],
        ...rest,
      };

      // Set the state with the updated table data
      setTableData(updatedTableData);
    }
    // console.log("Index ", id)
    // console.log(data)
  }

  return (
    <>
      <Box>
        <TableContainer>
          <Table size={size || "sm"} variant={"striped"}>
            <Thead bgColor={"yellow.300"}>
              <Tr>
                <Th>#</Th>
                {plans?.map((plan, key) => (
                  <Th key={key}>{plan}</Th>
                ))}
                <Th maxW={"12"}>Actions</Th>
              </Tr>
            </Thead>

            <Tbody>
              {attributes && plans
                ? attributes.map((attr, key) => (
                    <Tr key={key}>
                      <Td>
                        <EditableData
                          id={attr.id}
                          parentColumn={plans[key]}
                          attribute="label"
                          defaultValue={attr.value}
                          onChange={(data) => handleDataUpdate(data)}
                        />
                      </Td>
                      {rowData[attr.value]?.map((data, i) => (
                        <Td key={i} px={4}>
                          <EditableData
                            id={data.id}
                            parentColumn={data.plan}
                            attribute={attr.value}
                            defaultValue={data.value}
                            onChange={(data) => handleDataUpdate(data)}
                          />
                        </Td>
                      ))}
                      <Td maxW="12">
                        <HStack>
                          <IconButton
                            icon={<BsPlus size={20} />}
                            colorScheme="whatsapp"
                            size="xs"
                          />
                          <IconButton
                            icon={<BsTrash />}
                            colorScheme="red"
                            size="xs"
                          />
                        </HStack>
                      </Td>
                    </Tr>
                  ))
                : null}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PricingTable;
