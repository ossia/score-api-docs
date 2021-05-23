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
"_clear_state_8hpp_source.html",
"_find_string_in_file_8hpp_source.html",
"_models.html#IdentificationObjects",
"_scenario_edition_settings_8hpp_source.html",
"_widget_8hpp_source.html",
"class_base_scenario_presenter.html#ad15d0e152d2b09e79ef274e676327066",
"class_curve_1_1_model.html#a392a9a4186dc3dcc379733d6a76cf0c5",
"class_curve_1_1_update_curve.html",
"class_data_stream_writer.html#a508bf468b2c27ac521016d9c16e405fe",
"class_dataflow_1_1_remove_cable.html",
"class_execution_1_1_document_plugin.html#a2669e9e755c91987326a9baf97a024c5",
"class_execution_state_value_type.html#a9c0e7eca4c7fcb4ceaa38799572ab3c6",
"class_explorer_1_1_device_explorer_model.html#ab94bfa31bac1d937dc44c2f3d88a9436",
"class_gfx_1_1_gfx_input_device.html#a2128cd3c2031a3e23ae78bbfa3a4fdfe",
"class_gfx_1_1spout__device.html",
"class_j_s_1_1_edit_j_s_script.html",
"class_j_s_o_n_reader.html#ae9bb2b5dd21fe84aa1f4f7d2e752ef56",
"class_library_1_1_processes_item_model.html",
"class_media_1_1_settings_1_1_view.html#aa304c00e45cdf2a9ea4582ae856df3e4",
"class_midi_1_1_set_channel.html#a2a8add4c25b2cd907aac4a1533733c2a",
"class_p_m_1_1_plugin_settings_model.html",
"class_process_1_1_control_inlet.html#a32d87f125b97ab227032a850391307e1",
"class_process_1_1_layer_view.html#a40001176fa9aff8136526c977b58d482",
"class_process_1_1_process_model.html#acebc9658206d4f0ce5ba5a6b3ac60481",
"class_protocols_1_1_phidget_protocol_settings_widget.html#adaa64e613429fbbcd4242beff35c54ac",
"class_scenario_1_1_address_bar_item.html#ad5776112b553050ecd5e5f5bdb4090f8",
"class_scenario_1_1_command_1_1_create_state.html#ac7691aa9a7f7eecf079c69215c8ba9ca",
"class_scenario_1_1_command_1_1_set_auto_trigger.html#a853996fba865495ea0a31768107594b9",
"class_scenario_1_1_drop_process_on_state.html",
"class_scenario_1_1_interval_brace.html",
"class_scenario_1_1_interval_view.html#a3157bbc23de9d75ed43229b357f1c35e",
"class_scenario_1_1_move_left_brace_in_scenario___state_wrapper.html",
"class_scenario_1_1_scenario_document_presenter.html#a758c11a14e6e77065da4272af517482b",
"class_scenario_1_1_size_policy_widget.html#a506d26016bcdc717352cd6a1e7ba48b4",
"class_scenario_1_1_time_signature_handle.html#ab94eea4faf90b3b2b51b07a0643fefd7",
"class_spline3_d_1_1_change_spline.html#a575fba9c71a75af97875289f069babc2",
"class_text_label.html#a873c6bd318e77bc94cad33e4909b1f64",
"class_vec3f_value_type.html#a01d5dccceaa23fb936b603ddf3d41d17",
"classscore_1_1_aggregate_command.html#a80af29ae389914f36e6a455c0064a434",
"classscore_1_1_document_manager.html#a7fcaf72614301cbcdad11713ef3cdc12",
"classscore_1_1_indirect_container_wrapper.html#ae99b1a6549cb23c878b8516998dec0d4",
"classscore_1_1_presenter.html#ac1553a72820090c938658e04f6e38fff",
"classscore_1_1_selection_dispatcher.html#a2538813aabb45016bd7fa0252d170b5e",
"classscore_1_1_title_bar.html",
"classscore__plugin__transport.html#a5fbb4498fc83f1b68795a75e67812ca1",
"classvst_1_1_model.html#adbd71f4715f62f77642c87918594504c",
"score-plugin-gfx_2_gfx_2_video_2_inspector_8hpp_source.html",
"struct_control_1_1_executor_gui_update.html#af512470c1b86b17f7e3a2d9e7a69679f",
"struct_curve_1_1_style_interface.html",
"struct_execution_1_1_settings_1_1_merging_policies.html#af15f8931630e7e619e5329a683f15215",
"struct_gfx_1_1con__unvalidated.html#a910eb819d3f35fafb63b84ce493d19c1",
"struct_jit_1_1outlet__vis.html#a7726086610800c268caf7dc50f8bbc6e",
"struct_media_1_1_frame_computer.html#a4bb4fcc22249eb342dcff68282f74075",
"struct_nodal_1_1_hierarchy_manager_1_1_child_pair.html#a838cabf9d798279ec4910e9eb19d7352",
"struct_pass.html#adf5f4af0fd9a80d2f059bde763724fb7",
"struct_process_1_1_style.html#ab2dafff8eb51c580cf223c73b50a792f",
"struct_q_meta_type_id_3_01_scenario_1_1_tool_01_4.html",
"struct_scenario_1_1_address_accessor_curve_creator.html#a6e28a58b827c55b41d5b8d59ad15ab2a",
"struct_scenario_1_1_scenario_being_copied.html#ac96fab4a5a936432e656867bc5377cbd",
"struct_state_1_1_expr_data.html#ae7959afceeacd9bc0cab157eaa2877b8",
"struct_textured_mesh.html",
"structgraphics__item__ptr.html#a272774f66d42794d06e9e64f39440bd2",
"structscore_1_1_document_metadata.html#a0352c8ed8db1580042ec9bbf07534ebc",
"structscore_1_1_start_screen_link.html#a578ab78d445fdcea5b261c82029fe6b6",
"structscore_1_1lazy__init__t.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';