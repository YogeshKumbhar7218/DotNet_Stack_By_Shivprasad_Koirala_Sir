import { Address } from "./Address-class"  //access a outside class
class Customer{
    name: string = "";
    phone: string = "";
    Address: Array<Address> = new Array<Address>();
}
class CustomerChild extends Customer{

}