import React from "react";
import ChevronDownIcon from "@/pattern/common/atoms/icons/chevron-down-icon";
import DownloadIcon from "@/pattern/common/atoms/icons/download-icon";
import ButtonWithIcon from "@/pattern/common/molecules/controls/button-with-icon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DateInput from "@/pattern/common/molecules/inputs/date-input";
import TransactionTypeFilter from "@/pattern/common/molecules/filter/transaction-type-filter";
import FilterToggle from "@/pattern/common/atoms/filter-toggle";

interface IListType {
  label: string;
  value: string;
}

const rolesFilterSetting: IListType[] = [
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Last 7 days",
    value: "last 7 days",
  },
  {
    label: "This month",
    value: "this month",
  },
  {
    label: "Last 3 months",
    value: "last 3 months",
  },
  {
    label: "This year",
    value: "this year",
  },
  {
    label: "Last year",
    value: "last year",
  },
  {
    label: "All time",
    value: "all time",
  },
];

const TransactionsActions = () => {
  const [open, setOpen] = React.useState(false);

  const handleSaveFilterSettings = () => {
    setOpen(false);
  };

  return (
    <div className='flex items-center gap-3 w-fit'>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        dismissible={false}
        direction='right'
      >
        <DrawerTrigger asChild>
          <ButtonWithIcon
            variant='grey'
            onClick={() => setOpen(true)}
            className='pr-[20px] pl-[30px] !w-fit'
            suffixIcon={<ChevronDownIcon />}
          >
            Filter
          </ButtonWithIcon>
        </DrawerTrigger>

        <DrawerContent className=' flex flex-col  bg-transparent p-2 w-full ml-auto max-w-[470px] h-full'>
          <aside className='py-[20px] rounded-[20px] flex flex-col justify-between overflow-auto  bg-white h-full'>
            <div className='gap-y-6 flex flex-col'>
              <header className='flex px-6 flex-row items-center justify-between'>
                <p className='text-2xl font-bold text-[#131316]'>Filter</p>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </header>

              <section className='w-full '>
                <ScrollArea className='w-full whitespace-nowrap'>
                  <div className='w-full pb-4 flex px-6 items-center gap-3 flex-nowrap'>
                    {rolesFilterSetting.map(({ value, label }) => (
                      <FilterToggle key={value} label={label} value={value} />
                    ))}
                  </div>
                  <ScrollBar orientation='horizontal' className='h-1.5' />
                </ScrollArea>
                <div className='px-6 space-y-6'>
                  {/* Date Range */}
                  <div className='w-full space-y-[12px]'>
                    <label htmlFor='' className='block text-base font-semibold'>
                      Date Range
                    </label>
                    <DateInput />
                  </div>

                  <div className='w-full space-y-[12px] relative'>
                    <label htmlFor='' className='block text-base font-semibold'>
                      Transaction Type
                    </label>
                    <TransactionTypeFilter
                      items={[
                        "Store Transactions",
                        "Get Tipped",
                        "Withdrawals",
                        "Charge Backs",
                        "Cash Backs",
                        "Refer & Earn",
                      ]}
                    />
                  </div>

                  <div className='w-full space-y-[12px] !mt-20 relative'>
                    <label htmlFor='' className='block text-base font-semibold'>
                      Transaction Status
                    </label>
                    <TransactionTypeFilter
                      items={["Successful", "Pending", "Failed"]}
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className='w-full px-6 flex items-center  justify-between gap-3'>
              <Button
                className='w-full'
                variant='outline'
                onClick={handleSaveFilterSettings}
              >
                Clear
              </Button>
              <Button className='w-full' onClick={handleSaveFilterSettings}>
                Apply
              </Button>
            </div>
          </aside>
        </DrawerContent>
      </Drawer>

      <ButtonWithIcon
        variant='grey'
        className='pr-[20px] pl-[30px] !w-fit'
        suffixIcon={<DownloadIcon />}
      >
        Export list
      </ButtonWithIcon>
    </div>
  );
};

export default TransactionsActions;
