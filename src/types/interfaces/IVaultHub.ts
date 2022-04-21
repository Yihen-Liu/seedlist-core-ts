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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface IVaultHubInterface extends utils.Interface {
  functions: {
    "hasMinted(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "initPrivateVault(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateDataByIndex(address,uint16,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateDataByName(address,string,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithMinting(address,string,string,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithoutMinting(address,string,string,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "totalSavedItems(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "vaultHasRegister(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "hasMinted"
      | "initPrivateVault"
      | "queryPrivateDataByIndex"
      | "queryPrivateDataByName"
      | "savePrivateDataWithMinting"
      | "savePrivateDataWithoutMinting"
      | "totalSavedItems"
      | "vaultHasRegister"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "hasMinted",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initPrivateVault",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByIndex",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByName",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateDataWithMinting",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateDataWithoutMinting",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSavedItems",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultHasRegister",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "hasMinted", data: BytesLike): Result;
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
    functionFragment: "totalSavedItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultHasRegister",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IVaultHub extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultHubInterface;

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
    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vaultHasRegister(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  hasMinted(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initPrivateVault(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryPrivateDataByIndex(
    addr: string,
    index: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  queryPrivateDataByName(
    addr: string,
    label: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  savePrivateDataWithMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    receiver: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  savePrivateDataWithoutMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSavedItems(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vaultHasRegister(addr: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultHasRegister(addr: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultHasRegister(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultHasRegister(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
