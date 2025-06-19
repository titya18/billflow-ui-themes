
import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface AutocompleteOption {
  value: string
  label: string
}

interface AutocompleteProps {
  options: AutocompleteOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  label?: string
  freeSolo?: boolean
  disabled?: boolean
  clearable?: boolean
  fullWidth?: boolean
  className?: string
}

export function Autocomplete({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  label,
  freeSolo = false,
  disabled = false,
  clearable = true,
  fullWidth = false,
  className,
}: AutocompleteProps) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(value || "")
  const [selectedValue, setSelectedValue] = React.useState(value || "")

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
      setInputValue(value)
    }
  }, [value])

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue)
    setInputValue(optionValue)
    onValueChange?.(optionValue)
    setOpen(false)
  }

  const handleClear = () => {
    setSelectedValue("")
    setInputValue("")
    onValueChange?.("")
  }

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue)
    if (freeSolo) {
      onValueChange?.(newValue)
    }
  }

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  )

  return (
    <div className={cn("space-y-2", fullWidth && "w-full", className)}>
      {label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between",
              fullWidth && "w-full",
              !selectedValue && "text-muted-foreground"
            )}
            disabled={disabled}
          >
            <span className="truncate">
              {selectedValue
                ? options.find(option => option.value === selectedValue)?.label || inputValue
                : placeholder}
            </span>
            <div className="flex items-center gap-1">
              {clearable && selectedValue && (
                <X
                  className="ml-2 h-4 w-4 shrink-0 opacity-50 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClear()
                  }}
                />
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("p-0", fullWidth && "w-full")} align="start">
          <Command>
            <CommandInput
              placeholder={`Search ${label?.toLowerCase() || 'options'}...`}
              value={inputValue}
              onValueChange={handleInputChange}
            />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValue === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
                {freeSolo && inputValue && !filteredOptions.some(opt => opt.label === inputValue) && (
                  <CommandItem
                    value={inputValue}
                    onSelect={() => handleSelect(inputValue)}
                  >
                    <Check className="mr-2 h-4 w-4 opacity-0" />
                    Add "{inputValue}"
                  </CommandItem>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
