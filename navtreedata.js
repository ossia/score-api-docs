/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_base_scenario_trigger_command_factory_8hpp_source.html",
"_entity_impl_8hpp_source.html",
"_m_i_d_i_specific_settings_8hpp_source.html",
"_property_8hpp_source.html",
"_state_inspector_widget_8hpp_source.html",
"class_audio_1_1_settings_1_1_model.html#a94d89e88e6a4408fe3a0d08f1190f0ca",
"class_curve_1_1_application_plugin.html#aad10ba8070f96ed5a655367e50c84d00",
"class_curve_1_1_segment_factory.html#a3be3df26c242fa6ba6c58782a2997436",
"class_data_stream_reader.html#a626fb7f0be61de74d91d837d39064900",
"class_data_stream_writer.html#af27e2fb056fba4f9b762661d4f6a315a",
"class_device_1_1_device_interface.html#acb6b250944bd41429b5c228c15b9931d",
"class_execution_1_1_interval_component_base.html#a977140eb0db25336965a786de160e8d3",
"class_explorer_1_1_address_settings_widget.html#a356453ba6ef4d5d79c07baededc22c29",
"class_explorer_1_1_node_update_proxy.html#af43c9e4e62d2003e33fa72da562a2a50",
"class_gfx_1_1_gfx_output_device.html#a9ab8a60f7f3d68f609cca423818dec44",
"class_gfx_1_1_video_1_1_model.html#aad58f2326f6ea4e7e5fa4c26e114155d",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_9std_1_1is__base__of_3_0398040744b894784cbf4c6c5f48e82f4.html#a4994a0b12d2a3480aee052033a85ed6a",
"class_j_s_1_1_process_model.html#ab396ff6d6128da7ebc0b18e55f4e5d82",
"class_j_s_o_n_writer.html#a4c123aaa1562aa4d8000ce822ee0779e",
"class_library_1_1_recursive_filter_proxy.html",
"class_media_1_1_settings_1_1_presenter.html#a4e2e51426b1ad5aded618745318fa941",
"class_midi_1_1_set_channel.html#ab3f1f14a8857bede0b2abb8094a94dbd",
"class_outlet.html#a64e2c206c7cb59d0e09541e4990f73a2",
"class_process_1_1_automatable_factory.html#a322b9704a70a4e4410824b1551457773",
"class_process_1_1_layer_factory.html#ab0720366db3c0a83586e6f90bde25ed5",
"class_process_1_1_process_drop_handler.html#ad9aef2e11623e2a9a3c180a5730bd0f7",
"class_protocols_1_1_joystick_protocol_settings_widget.html#ad9ef8d6cdf1d9e4b6d8abcedcde0f351",
"class_reader.html",
"class_scenario_1_1_click_on_slot_handle___transition.html",
"class_scenario_1_1_command_1_1_macro.html#a0cb6dc8c2b144f6a02f525a3735dd248",
"class_scenario_1_1_command_1_1_scenario_paste_elements_after.html",
"class_scenario_1_1_displayed_elements_presenter.html#adf53236b1e11b4aa553303bfd28d4933",
"class_scenario_1_1_full_view_interval_view.html#a8fbc262b6937a97b7b5770408e09fd44",
"class_scenario_1_1_interval_presenter.html#ab26f5b35c13cf4ecd70a2ce8330bab12",
"class_scenario_1_1_minimap.html#aacf6ce0d80f328c083fd703c28b9ccb8",
"class_scenario_1_1_scenario_create_3_01_comment_block_model_01_4.html",
"class_scenario_1_1_settings_1_1_model.html#a831c000f8768512055314f7805580aa1",
"class_scenario_1_1_temporal_interval_presenter.html#a58dbf1d86700e0ddeb14e08bac266970",
"class_script.html",
"class_state_1_1_numeric_value_widget.html",
"class_tree_node_3_01_state_1_1_expr_data_01_4.html#ada29adbde25ab443e7ad359a505d833a",
"classid__base__t.html#a0dc53e900d216edd85a7e4fc69befe9f",
"classscore_1_1_command_stack.html#a2b8c5fbf94bd3ad931092d47c4a249f0",
"classscore_1_1_empty_rect_item.html#af0b61ab6244d6b28e5e5f3ab043e2327",
"classscore_1_1_indirect_container_wrapper.html#a23d578380891a2ee6fd7774e44f6f4e1",
"classscore_1_1_presenter.html#a7017478d4328564586a94846e069ee42",
"classscore_1_1_q_graphics_range_slider.html#a60f30bd98b0e9eddff730dec160d6edd",
"classscore_1_1_settings_delegate_view.html#af26a57fb6e93223656c7224745515130",
"classscore_1_1_view.html#ae467d0726d205cec84d0998b10037a03",
"classscore_1_1gfx_1_1_video_node_renderer.html#a4391602c8645ef380477d186a42403a0",
"classvst3_1_1_v_s_t_control_port_factory.html#a7b2edef54746849a2372e50b5fa9be7a",
"globals.html",
"score__plugin__gfx_8hpp_source.html",
"struct_control_1_1_float_control.html#a4d5aa737b3ea1ea9af49ad22a84882d2",
"struct_curve_1_1_segment_data.html#abe85c5e4976e1699fba4ca69910158ec",
"struct_execution_1_1_metronome_sounds.html#a19e4e2630eec55f7eea9e8c7fa9647f7",
"struct_gfx_1_1_kinect2_1_1_kinect2_settings.html#a7be495842a9fe24667d4be9485683044",
"struct_jit_1_1_application_plugin.html#a65cd094615e3f03b430f1891cbe0ffb0",
"struct_library_1_1_subcategories.html#a27bf004f5cbb21db8bef3269d5b4d852",
"struct_metadata_3_01_concrete_key__k_00_01oscr_1_1_process_model_3_01_info_01_4_01_4.html",
"struct_nodes_1_1_math_audio_generator_1_1_node_1_1_state.html#a26508726bd35c767b83a9e2d8984cf49",
"struct_pd_1_1ossia__to__pd__value.html#a23eaf0a78091715fd9600f1cf1e99d55",
"struct_process_1_1_style.html#afb49121b55c48fd677a4a31e908c713a",
"struct_q_meta_type_id_3_01_state_1_1_address_accessor_01_4.html#a4e0b03d5020599f90c047b419626d86caa2b4505b7af4a534665578d420c1f3aa",
"struct_scenario_1_1_categorised_scenario.html#a1f68f980aaad5f0ee601e19be1995646",
"struct_scenario_1_1_scenario_being_copied.html#ab5e6ea7982336fae622fe37e87a53733",
"struct_state_1_1_domain.html#a5737a4dfa6347204f4422abaaaef8e61",
"struct_time_val.html#a78ff0ddfb9d27c7c53c86b9a51c604ce",
"structgenerator.html#ad9f7e2f32bee3e139176d0f2df2a00d2",
"structoscr_1_1_serializer.html#a072bd5f8b08aa06f54b32e0e34cf8d38",
"structscore_1_1_command_spinbox.html",
"structscore_1_1_q_graphics_slider_base.html#ab42e33d13e71bc82289dbbd81c19d513",
"structscore_1_1_value_double_slider.html",
"structscore_1_1gfx_1_1_render_state.html#aa36a72c9f68f5a5bdc282fdb51f4e76e",
"structscore_1_1uuids_1_1uuid.html#a59dd8bf43c5c8bfa9ad1e4bb7a80cf2f"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';