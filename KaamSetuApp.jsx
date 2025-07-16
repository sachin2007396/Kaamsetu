import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const workers = [
  {
    name: "Sita Devi",
    skill: "Cooking",
    area: "Tiljala",
    wage: "₹400/day",
    phone: "9999988888",
    rating: 4,
  },
  {
    name: "Ramesh Yadav",
    skill: "Carpenter",
    area: "Topsia",
    wage: "₹600/day",
    phone: "9999977777",
    rating: 5,
  },
];

export default function KaamSetuApp() {
  const [view, setView] = useState("home");
  const [formData, setFormData] = useState({ name: "", skill: "", area: "", wage: "", phone: "" });

  const handleRegister = () => {
    alert("Worker Registered: " + formData.name);
    setFormData({ name: "", skill: "", area: "", wage: "", phone: "" });
    setView("home");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">KaamSetu</h1>
      {view === "home" && (
        <div className="grid gap-4">
          <Button onClick={() => setView("find")}>🔍 Find Worker</Button>
          <Button onClick={() => setView("register")}>👨‍🔧 Register as Worker</Button>
          <Button variant="outline">📞 Contact Admin</Button>
        </div>
      )}

      {view === "find" && (
        <div className="grid gap-4">
          <Button variant="outline" onClick={() => setView("home")}>⬅ Back</Button>
          {workers.map((w, i) => (
            <Card key={i} className="bg-gray-100">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{w.name}</h2>
                <p>Skill: {w.skill}</p>
                <p>Area: {w.area}</p>
                <p>Wage: {w.wage}</p>
                <p>Phone: 📞 {w.phone}</p>
                <p>Rating: {'⭐'.repeat(w.rating)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {view === "register" && (
        <div className="grid gap-2">
          <Button variant="outline" onClick={() => setView("home")}>⬅ Back</Button>
          <Input placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <Input placeholder="Skill" value={formData.skill} onChange={e => setFormData({ ...formData, skill: e.target.value })} />
          <Input placeholder="Area" value={formData.area} onChange={e => setFormData({ ...formData, area: e.target.value })} />
          <Input placeholder="Wage (e.g., ₹500/day)" value={formData.wage} onChange={e => setFormData({ ...formData, wage: e.target.value })} />
          <Input placeholder="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
          <Button onClick={handleRegister}>✅ Register</Button>
        </div>
      )}
    </div>
  );
}
