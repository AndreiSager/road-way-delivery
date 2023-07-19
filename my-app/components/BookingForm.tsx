export default function BookingForm() {
    return(
        <div>
            <div>
                <form action="">
                    <select 
                        name="vehicle" 
                        id="vehicles" 
                        defaultValue="Motorcycle"
                        required
                        >
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Sedan">Sedan</option>
                        <option value="MPV">MPV</option>
                        <option value="L300/Van">L300/Van</option>
                        <option value="Closed Truck">Closed Truck</option>
                        <option value="6w Fwd Truck">6w Fwd Truck</option>
                        <option value="Wing Van">Wing Truck</option>
                    </select>
                    <select>
                        
                    </select>
                </form>
            </div>
        </div>
    )
}