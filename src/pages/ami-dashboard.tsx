"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Khánh Hòa - AMI",
    cod: "26/06/2019",
    acceptance: "11/09/2019",
    fit: "FIT 1 (9,35 cent/kWh)",
    risk: "Cao",
    recommendation:
      "Giải trình không có quy định rõ trước 2023; nộp hồ sơ từ 07/2019 làm bằng chứng thiện chí.",
  },
  {
    name: "BT1 - AMI",
    cod: "01/11/2021", // ✅ CẬP NHẬT MỚI
    acceptance: "26/10/2021",
    fit: "FIT 1",
    risk: "Trung bình",
    recommendation:
      "Xem xét điều chỉnh ngày COD sau nghiệm thu; hy sinh vài ngày điện để giữ FIT 20 năm.",
  },
  {
    name: "BMT - AMI",
    cod: "Chưa xác minh",
    acceptance: "Sau COD",
    fit: "FIT 1",
    risk: "Cao",
    recommendation:
      "Bổ sung giấy phép thủy lộ; phản biện kết luận thanh tra về đất đai bằng hồ sơ pháp lý.",
  },
];

export default function AIDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {projects.map((project, index) => (
        <Card key={index} className="rounded-2xl shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>
              <strong>COD:</strong> {project.cod}
            </p>
            <p>
              <strong>Nghiệm thu:</strong> {project.acceptance}
            </p>
            <p>
              <strong>FIT kỳ vọng:</strong> {project.fit}
            </p>
            <p>
              <strong>Rủi ro:</strong>{" "}
              <Badge
                variant={project.risk === "Cao" ? "destructive" : "default"}
              >
                {project.risk}
              </Badge>
            </p>
            <p>
              <strong>Khuyến nghị:</strong> {project.recommendation}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
