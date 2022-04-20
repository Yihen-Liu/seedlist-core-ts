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
    "queryPrivateDataByIndex(address,uint16)": FunctionFragment;
    "queryPrivateDataByName(address,string)": FunctionFragment;
    "savePrivateData(address,string,string,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initPrivateVault"
      | "queryPrivateDataByIndex"
      | "queryPrivateDataByName"
      | "savePrivateData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initPrivateVault",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByName",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateData",
    values: [string, string, string, boolean]
  ): string;

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
    functionFragment: "savePrivateData",
    data: BytesLike
  ): Result;

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
      overrides?: CallOverrides
    ): Promise<[string]>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    savePrivateData(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
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
    overrides?: CallOverrides
  ): Promise<string>;

  queryPrivateDataByName(
    addr: string,
    label: string,
    overrides?: CallOverrides
  ): Promise<string>;

  savePrivateData(
    addr: string,
    data: string,
    cryptoLabel: string,
    minted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
      overrides?: CallOverrides
    ): Promise<string>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      overrides?: CallOverrides
    ): Promise<string>;

    savePrivateData(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
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
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    savePrivateData(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
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
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    savePrivateData(
      addr: string,
      data: string,
      cryptoLabel: string,
      minted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}