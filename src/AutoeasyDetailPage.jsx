
import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

function AutoeasyDetailPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="bg-white w-full text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">내 차처럼 쉬운 장기렌트</h1>
        <p className="text-lg mb-6">계약 후 7일 이내 출고 보장!</p>
        <Button className="text-lg px-8 py-4 rounded-2xl shadow">지금 바로 견적받기</Button>
      </section>
    </div>
  );
}

export default AutoeasyDetailPage;
