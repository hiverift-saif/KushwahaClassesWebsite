import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface EnrollmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnrollmentForm({ open, onOpenChange }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    course: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.studentName || !formData.parentName || !formData.email || !formData.phone || !formData.grade || !formData.course) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show success message
    toast.success("Enrollment request submitted successfully! We will contact you soon.");
    
    // Reset form and close dialog
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      course: "",
      address: "",
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
          <DialogTitle className="text-2xl bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Enrollment Form
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to enroll at Kushwaha Classes. We'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name *</Label>
              <Input
                id="studentName"
                placeholder="Enter student's full name"
                value={formData.studentName}
                onChange={(e) => handleChange("studentName", e.target.value)}
                required
              />
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

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="grade">Grade/Class *</Label>
              <Select value={formData.grade} onValueChange={(value) => handleChange("grade", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8th Grade</SelectItem>
                  <SelectItem value="9">9th Grade</SelectItem>
                  <SelectItem value="10">10th Grade</SelectItem>
                  <SelectItem value="11">11th Grade</SelectItem>
                  <SelectItem value="12">12th Grade</SelectItem>
                  <SelectItem value="dropper">Dropper</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Course Interested In *</Label>
              <Select value={formData.course} onValueChange={(value) => handleChange("course", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iit-jee">IIT-JEE</SelectItem>
                  <SelectItem value="neet">NEET</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="accounts">Accounts</SelectItem>
                  <SelectItem value="economics">Economics</SelectItem>
                  <SelectItem value="general-aptitude">General Aptitude</SelectItem>
                  <SelectItem value="academics">Academic Classes (8th-12th)</SelectItem>
                </SelectContent>
              </Select>
            </div>
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

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
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
