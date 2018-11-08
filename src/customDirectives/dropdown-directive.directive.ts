import { Directive, Renderer2, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    toggleDowpdown: boolean = false;
    
    constructor(private renderer2: Renderer2, private elRef: ElementRef) {}

    @HostListener('click') toggleDropDown() {
        this.toggleDowpdown = !this.toggleDowpdown;
        const dropdownMenu = this.elRef.nativeElement.getElementsByClassName('dropdown-menu');
        
        if (this.toggleDowpdown  && dropdownMenu && dropdownMenu.length > 0) {
            dropdownMenu[0].classList.add('show');
        } else {
            const indx = dropdownMenu[0].classList.remove('show');
        }
    }
}