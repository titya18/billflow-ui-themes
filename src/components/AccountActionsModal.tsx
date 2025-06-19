
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

interface AccountActionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountActionsModal({ isOpen, onClose }: AccountActionsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Lock / Close Serve</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <RadioGroup defaultValue="lock-now" className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lock-now" id="lock-now" />
              <Label htmlFor="lock-now">Lock service now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lock-future" id="lock-future" />
              <Label htmlFor="lock-future">Lock service in a future date</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="close-now" id="close-now" />
              <Label htmlFor="close-now">Close service now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="close-future" id="close-future" />
              <Label htmlFor="close-future">Close service in a future date</Label>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              id="comment"
              placeholder="Add your comment here..."
              className="min-h-[80px]"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Lock/Close Account
            </Button>
            <Button variant="destructive" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
