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
} from "./common";

export interface PrivateVaultInterface extends utils.Interface {
  functions: {
    "getLabelByIndex(uint16)": FunctionFragment;
    "getLabelByName(string)": FunctionFragment;
    "save(string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getLabelByIndex" | "getLabelByName" | "save"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLabelByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLabelByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "save",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLabelByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLabelByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "save", data: BytesLike): Result;

  events: {};
}

export interface PrivateVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PrivateVaultInterface;

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
    getLabelByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLabelByName(name: string, overrides?: CallOverrides): Promise<[string]>;

    save(
      data: string,
      cryptoLabel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getLabelByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getLabelByName(name: string, overrides?: CallOverrides): Promise<string>;

  save(
    data: string,
    cryptoLabel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getLabelByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getLabelByName(name: string, overrides?: CallOverrides): Promise<string>;

    save(
      data: string,
      cryptoLabel: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getLabelByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLabelByName(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    save(
      data: string,
      cryptoLabel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLabelByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLabelByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    save(
      data: string,
      cryptoLabel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
