import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface PlaySchoolEnrollmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlaySchoolEnrollmentForm({ open, onOpenChange }: PlaySchoolEnrollmentFormProps) {
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    parentName: "",
    email: "",
    phone: "",
    program: "",
    address: "",
    medicalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.childName || !formData.dateOfBirth || !formData.parentName || !formData.email || !formData.phone || !formData.program) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show success message
    toast.success("Play School enrollment request submitted successfully! We will contact you soon to schedule a visit.");
    
    // Reset form and close dialog
    setFormData({
      childName: "",
      dateOfBirth: "",
      parentName: "",
      email: "",
      phone: "",
      program: "",
      address: "",
      medicalInfo: "",
    });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Play School Enrollment Form
          </DialogTitle>
          <DialogDescription>
            Enroll your child at Kushwaha Play School. Fill in the details below and we'll schedule a visit for you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name *</Label>
              <Input
                id="childName"
                placeholder="Enter child's full name"
                value={formData.childName}
                onChange={(e) => handleChange("childName", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
            <Input
              id="parentName"
              placeholder="Enter parent's full name"
              value={formData.parentName}
              onChange={(e) => handleChange("parentName", e.target.value)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="program">Select Program *</Label>
            <Select value={formData.program} onValueChange={(value) => handleChange("program", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="playgroup">Playgroup (2-3 years)</SelectItem>
                <SelectItem value="nursery">Nursery (3-4 years)</SelectItem>
                <SelectItem value="kindergarten">Kindergarten (4-5 years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Your complete address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalInfo">Medical Information (if any)</Label>
            <Input
              id="medicalInfo"
              placeholder="Any allergies or medical conditions we should know about"
              value={formData.medicalInfo}
              onChange={(e) => handleChange("medicalInfo", e.target.value)}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Submit Enrollment
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
