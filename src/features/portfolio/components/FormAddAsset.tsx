import {Button, Field, Fieldset, Input, Label, Legend, Switch} from "@headlessui/react";
import {useDispatch} from "react-redux";
import {addAsset} from "../../../app/store/slices/portfolioSlice.tsx";
import * as React from "react";
import {useState} from "react";

export default function FormAddAsset() {
    const [enabled, setEnabled] = useState(false);
    const dispatch = useDispatch();

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        dispatch(addAsset({
            symbol: formData.get('symbol') as string,
            amount: parseFloat(formData.get('amount') as string),
            purchasePrice: enabled ? 0 : parseFloat(formData.get('price') as string),
        }))
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <Fieldset className={'bg-white rounded-xl shadow p-6 flex flex-col gap-5'}>
                <Legend className={'block text-[#1E293B] mb-2 text-lg'}>
                    Добавить активы
                </Legend>
                <Field>
                    <Label className={'block text-[#1E293B] mb-2 text-sm'}>Символ</Label>
                    <Input
                        className={'w-full p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0FBA81]/30 focus:border-[#0FBA81] outline-none transition-all'}
                        placeholder={'BTC, ETH...'}
                        name={'symbol'}
                        required={true}
                    />
                </Field>
                <Field>
                    <Label className={'block text-[#1E293B] mb-2 text-sm'}>Количество</Label>
                    <Input
                        className={'w-full p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0FBA81]/30 focus:border-[#0FBA81] outline-none transition-all'}
                        name={'amount'}
                        type={'number'}
                        required={true}
                    />
                </Field>
                <Field>
                    <Label className={'block text-[#1E293B] mb-2 text-sm'}>Airdrop</Label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={'group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600'}
                    >
                        <span
                            className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"/>
                    </Switch>
                </Field>
                {!enabled &&
                    <Field>
                        <Label className={'block text-[#1E293B] mb-2 text-sm'}>Цена покупки</Label>
                        <Input
                            className={'w-full p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0FBA81]/30 focus:border-[#0FBA81] outline-none transition-all'}
                            name={'price'}
                            type={'number'}
                            required={true}
                        />
                    </Field>
                }
                <Button
                    type={"submit"}
                    className={'bg-[#0FBA81] hover:bg-[#0DA978] text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm'}
                >
                    Добавить
                </Button>
            </Fieldset>
        </form>
    )
}