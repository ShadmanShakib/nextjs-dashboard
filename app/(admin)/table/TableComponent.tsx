"use client";
import React from "react";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { Activity } from "lucide-react";
import { data } from "./data";

type Props = {};

export default function TableComponent({}: Props) {
  return (
    <Card>
      <Title className="">List of products </Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>
              <input className="h-4 w-4" type="checkbox" />
            </TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell draggable={true}>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>
                <input className="h-4 w-4" type="checkbox" />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell className=" ">
                <p className="break-word w-60 overflow-wrap whitespace-normal">
                  {item.departement}
                </p>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={Activity}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
