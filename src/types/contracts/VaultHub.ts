/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface VaultHubInterface extends utils.Interface {
  functions: {
    "initPrivateVault(address,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateDataByIndex(address,uint16,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateDataByName(address,string,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithMinting(address,string,string,bool,address,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithoutMinting(address,string,string,uint8,bytes32,bytes32)": FunctionFragment;
    "setTreasuryAddress(address)": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initPrivateVault"
      | "queryPrivateDataByIndex"
      | "queryPrivateDataByName"
      | "savePrivateDataWithMinting"
      | "savePrivateDataWithoutMinting"
      | "setTreasuryAddress"
      | "treasury"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initPrivateVault",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByIndex",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByName",
    values: [string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateDataWithMinting",
    values: [
      string,
      string,
      string,
      boolean,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateDataWithoutMinting",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "initPrivateVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryPrivateDataByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryPrivateDataByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "savePrivateDataWithMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "savePrivateDataWithoutMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {
    "Save(uint8,address)": EventFragment;
    "VaultInit(uint8,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Save"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultInit"): EventFragment;
}

export interface SaveEventObject {
  result: number;
  signer: string;
}
export type SaveEvent = TypedEvent<[number, string], SaveEventObject>;

export type SaveEventFilter = TypedEventFilter<SaveEvent>;

export interface VaultInitEventObject {
  result: number;
  signer: string;
}
export type VaultInitEvent = TypedEvent<[number, string], VaultInitEventObject>;

export type VaultInitEventFilter = TypedEventFilter<VaultInitEvent>;

export interface VaultHub extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultHubInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initPrivateVault(
      addr: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      receiver: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  initPrivateVault(
    addr: string,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryPrivateDataByIndex(
    addr: string,
    index: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  queryPrivateDataByName(
    addr: string,
    label: string,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  savePrivateDataWithMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    minted: boolean,
    receiver: string,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  savePrivateDataWithoutMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryAddress(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    initPrivateVault(
      addr: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      receiver: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Save(uint8,address)"(
      result?: BigNumberish | null,
      signer?: string | null
    ): SaveEventFilter;
    Save(result?: BigNumberish | null, signer?: string | null): SaveEventFilter;

    "VaultInit(uint8,address)"(
      result?: BigNumberish | null,
      signer?: string | null
    ): VaultInitEventFilter;
    VaultInit(
      result?: BigNumberish | null,
      signer?: string | null
    ): VaultInitEventFilter;
  };

  estimateGas: {
    initPrivateVault(
      addr: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      receiver: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initPrivateVault(
      addr: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      receiver: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}