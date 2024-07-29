import React from "react";

// SyntaxError: Unexpected token 'export'
// https://github.com/ant-design/pro-components/issues/6525
// import { Avatar } from "antd/lib";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Index = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* SyntaxError: Cannot use import statement outside a module ||  */}
      {/* 
        fix:  next.config
        transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
      */}
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    </div>
  );
};

export default Index;
