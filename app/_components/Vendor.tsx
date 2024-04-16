import Item from "./Item";
import { VendorType } from "../_interfaces/Bronze.interface";
import React from "react";

export default function Vendor({
  vendor,
  checkedMap,
  setCheckedMap,
}: {
  vendor: VendorType;
  checkedMap: Record<string, boolean>;
  setCheckedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  const items = vendor.items.map((item, i) => {
    return (
      <Item
        item={item}
        key={`item ${i}`}
        checkedMap={checkedMap}
        setCheckedMap={setCheckedMap}
      />
    );
  });
  return (
    <div className="w-1/4 border border-purple-900">
      <p>{vendor.name}</p>
      <div>{items}</div>
    </div>
  );
}
