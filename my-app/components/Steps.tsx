import { StepsContent } from "@/constants";
import Image from "next/image";
import { BookingFormSelect, BookingFormDate } from '@/constants';

type SelectProps = {
    id: number;
    icon: string;
    title: string;
    select: SelectInputProps;
    options: Array<OptionsProps>;
}

type SelectInputProps = {
    name: string;
    id: string;
    default: string;
}

type OptionsProps = {
    id: number;
    value: string;
    option: string;
}

const SelectColumn = ( {id, icon, title, select, options}:SelectProps ) => (
    <div key={id} className="flex flex-col gap-2">
        <label htmlFor="pick-up__date" className="font-bold capitalize flex flex-row gap-2 items-center">
            <Image 
                src={icon}
                height={25}
                width={25}
                alt="No Icon"
                />
            {title}<span className="text-accent-1">*</span>
        </label>
        <select 
            name={select.name} 
            id={select.id}
            defaultValue={select.default}
            required
            className="inputField"
            >
            {options.map((option) => (
                <option key={option.id} value={option.value}>{option.option}</option>
            ))}
        </select>
    </div>
)

type DateInputProps = Omit<SelectInputProps, "default">;

type DateProps = {
    id: number;
    icon: string;
    title: string;
    date: DateInputProps;
}

const DateColumn = ( {id, icon, title, date}:DateProps ) => (
    <div key={id} className="flex flex-col gap-2">
        <label htmlFor="pick-up__date" className="font-bold capitalize flex flex-row gap-2 items-center">
            <Image 
                src={icon}
                height={25}
                width={25}
                alt="No Icon"
                />
            {title}<span className="text-accent-1">*</span>
        </label>
        <input 
            name={date.name}
            id={date.id} 
            type="date" 
            className="inputField"
            />
    </div>
)

const Divider = () => (
    <div className="w-full h-[5px] bg-slate-300"></div>
)

export default function Steps() {
    const sizeIcon = 20;

    return(
        <div className="sectionPadding w-full flex flex-row flex-wrap gap-8">
            <div className="flex flex-col justify-center items-center gap-16 w-full lg:w-3/5">
                <h1 className="font-bold text-4xl text-center">Get Delivered In Four Easy Steps</h1>
                <div className="flex flex-row flex-wrap justify-center items-center gap-12 w-full">
                    {StepsContent.map((steps) => (
                        <div key={steps.id} className="flex flex-col w-[300px] aspect-video text-center items-center ">
                            <h1 className="font-bold text-lg w-full lg:w-[205px]">{steps.title}: <span className="text-accent-1 uppercase">{steps.subtitle}</span></h1>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <Image
                                    src={steps.icon}
                                    height={75}
                                    width={100}
                                    alt={steps.alt}
                                    className="object-cover my-12 hover:scale-105 transition linear duration-200"
                                    />
                                <p className="font-medium text-gray-500">{steps.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-fit">
                <form action="" className="flex flex-col gap-4 p-8 bg-slate-200 rounded-lg shadow-lg lg:w-[410px]">
                    <SelectColumn id={BookingFormSelect[0].id} icon={BookingFormSelect[0].icon} title={BookingFormSelect[0].title} select={BookingFormSelect[0].select} options={BookingFormSelect[0].options}/>
                    <Divider/>
                    <SelectColumn id={BookingFormSelect[1].id} icon={BookingFormSelect[1].icon} title={BookingFormSelect[1].title} select={BookingFormSelect[1].select} options={BookingFormSelect[1].options}/>
                    <SelectColumn id={BookingFormSelect[2].id} icon={BookingFormSelect[2].icon} title={BookingFormSelect[2].title} select={BookingFormSelect[2].select} options={BookingFormSelect[2].options}/>
                    <Divider/>
                    <DateColumn id={BookingFormDate[0].id} icon={BookingFormDate[0].icon} title={BookingFormDate[0].title} date={BookingFormDate[0].date}/>
                    <DateColumn id={BookingFormDate[1].id} icon={BookingFormDate[1].icon} title={BookingFormDate[1].title} date={BookingFormDate[1].date}/>
                    <Divider/>
                    <input 
                        type="submit" 
                        value="Submit"
                        className="callToAction"
                        />
                </form>
            </div>
        </div>
    )
}